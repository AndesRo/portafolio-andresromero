export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-mesh-glow" />
      <div className="absolute inset-0 bg-grid bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
      <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
    </div>
  )
}
