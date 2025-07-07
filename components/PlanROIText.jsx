export default function PlanROIText({ plan }) {
  let text = "";

  switch (plan) {
    case "Launch":
      text = "If this doesn’t save you €20/day, your team’s not using it.";
      break;
    case "Optimize":
      text = "Kill one bottleneck. Unlock €10K/month.";
      break;
    case "Scale":
      text = "Your team wastes €5K+/month in chaos. This kills that.";
      break;
    default:
      return null;
  }

  return (
    <div className="mb-3">
      <p className="italic text-gray-500 text-[14px] mb-[10px]">{text}</p>
      <div className="h-[1.5px] bg-[#D100FF] my-[5px]" />
      <p className="font-bold text-[#111] text-[1.1rem] mb-[8px]">Here’s what you get:</p>
    </div>
  );
}
