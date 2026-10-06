export function SmartBasketPreview() {
  return (
    <div className="smart-basket-visual research-visual">
      <div className="research-top eyebrow">
        <span>Smart Basket</span>
        <span>UX research / 08</span>
      </div>
      <h4>
        From a balance
        <br />
        to a grocery plan.
      </h4>
      <div className="basket-tools">
        {["Balance Predictor", "Budget Calendar", "Suggested Grocery List"].map(
          (tool, index) => (
            <div key={tool}>
              <span>0{index + 1}</span>
              <strong>{tool}</strong>
              <span aria-hidden="true">&#8599;</span>
            </div>
          ),
        )}
      </div>
      <span className="visual-caption">
        Proposed ebtEDGE extension · Figma prototype
      </span>
    </div>
  );
}
export function SmartBasketWorkflow() {
  const src = `${import.meta.env.BASE_URL}images/smart-basket/workflow.png`;
  return (
    <figure className="behavioral-case-figure">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label="Open Smart Basket prototype workflow at full size"
      >
        <img
          src={src}
          alt="Smart Basket team prototype workflow showing login, account dashboard, balance predictor iterations, budget calendar, and suggested grocery list."
          loading="lazy"
        />
      </a>
      <figcaption>
        Team prototype and milestone iterations.{" "}
        <a href={src} target="_blank" rel="noreferrer">
          View full size &#8599;
        </a>
      </figcaption>
    </figure>
  );
}

export function SmartBasketComparisons() {
  const comparisons = [
    {
      file: "before-after-balance-predictor.png",
      title: "A clearer Balance Predictor",
      width: 1138,
      height: 802,
      alt: "Before and after: Dynamic Budget Calculator renamed Balance Predictor, an x added to remove individual items, and Add Item changed to Add Item & Price.",
      caption:
        "A more descriptive name, clearer input instructions, and item removal without restarting the list.",
    },
    {
      file: "before-after-grocery-list.png",
      title: "A more readable grocery list",
      width: 1110,
      height: 832,
      alt: "Before and after: Suggested Grocery List with a light-blue weekly budget, a scrolling category row replacing More, and stronger price formatting and visual hierarchy.",
      caption:
        "Consistent budget colors, visible category options, and stronger price hierarchy make the list easier to scan.",
    },
  ];
  return (
    <div className="basket-comparisons">
      {comparisons.map((item) => {
        const src = `${import.meta.env.BASE_URL}images/smart-basket/${item.file}`;
        return (
          <figure className="behavioral-case-figure" key={item.file}>
            <h4>{item.title}</h4>
            <p className="eyebrow">Before → After</p>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${item.title.toLowerCase()} comparison at full size`}
            >
              <img
                src={src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                loading="lazy"
              />
            </a>
            <figcaption>
                {item.caption}{" "}
                <a href={src} target="_blank" rel="noreferrer">
                  View full size &#8599;
                </a>
              </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
