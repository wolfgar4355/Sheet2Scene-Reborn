export default function PlanCard({
  title, price, features, onClick,
}: { title:string; price:string; features:string[]; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      className="text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4">
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm opacity-80">{price}</span>
      </div>
      <ul className="mt-3 text-sm opacity-90 list-disc pl-5">
        {features.map(f => <li key={f}>{f}</li>)}
      </ul>
    </button>
  );
}
