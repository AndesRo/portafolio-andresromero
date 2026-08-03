import { useEffect, useState } from 'react'

/**
 * Hora local en vivo, formateada con Intl usando la zona horaria del perfil.
 * Se actualiza cada segundo.
 */
export function useLiveClock(timeZone, locale) {
  const [time, setTime] = useState(() => formatTime(new Date(), timeZone, locale))

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime(new Date(), timeZone, locale))
    }, 1000)
    return () => clearInterval(id)
  }, [timeZone, locale])

  return time
}

function formatTime(date, timeZone, locale) {
  try {
    return new Intl.DateTimeFormat(locale, {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(date)
  } catch {
    return date.toLocaleTimeString()
  }
}

/**
 * Temperatura actual vía Open-Meteo (API pública, sin API key).
 * Se refresca cada 10 minutos.
 */
export function useWeather(lat, lng) {
  const [weather, setWeather] = useState({ temp: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false

    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m`
        )
        if (!res.ok) throw new Error('weather request failed')
        const data = await res.json()
        if (cancelled) return
        setWeather({ temp: data?.current?.temperature_2m ?? null, loading: false, error: null })
      } catch (err) {
        if (cancelled) return
        setWeather({ temp: null, loading: false, error: err.message })
      }
    }

    fetchWeather()
    const id = setInterval(fetchWeather, 10 * 60 * 1000)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [lat, lng])

  return weather
}
