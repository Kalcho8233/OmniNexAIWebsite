export default function PlanROIText({ plan }) {
  let line;

  switch (plan) {
    case "Launch":
      line = (
        <>
          If this doesn’t save you <strong>€20/day</strong>, your team’s not using it.
        </>
      );
      break;
    case "Optimize":
      line = (
        <>
          Kill one bottleneck.
          <br />
          Unlock <strong>€10K+/month</strong>.
        </>
      );
      break;
    case "Scale":
      line = (
        <>
          Eliminate operational chaos.
          <br />
          Unlock <strong>€20K+/month</strong> in potential gains.
        </>
      );
      break;
    default:
      return null;
  }

  return (
    <div className="mb-3">
      <p className="italic text-gray-700 text-[0.98rem] md:text-[1.05rem] mb-3 leading-snug">
        {line}
      </p>

      <div className="h-[1.5px] bg-[#D100FF] my-[6px]" />

      <p className="font-bold text-[#111] text-[1.15rem] mt-2">Here’s what you get:</p>
    </div>
  );
}
