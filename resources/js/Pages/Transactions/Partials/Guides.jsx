const instructions = {
  bni: {
    title: "How to pay using BNI Virtual Account",
    steps: [
      "Go to the nearest BNI ATM or BNI Syariah ATM and select the Other Transactions menu.",
      "Select Transfer.",
      "Select Other Bank Account.",
      "Enter the Virtual Account Number that you have received.",
      "Enter the amount that you have to pay.",
      "Follow the next instructions until the transaction is complete.",
    ],
  },
  // mandiri: {
  //   title: "How to pay using Mandiri Virtual Account",
  //   steps: [
  //     "Go to the nearest Mandiri ATM and select the Other Transactions menu.",
  //     "Select Transfer.",
  //     "Select Other Bank Account.",
  //     "Enter the Virtual Account Number that you have received.",
  //     "Enter the amount that you have to pay.",
  //     "Follow the next instructions until the transaction is complete.",
  //   ],
  // },
};

export default function Guides({ bank }) {
  const guide = instructions[bank];

  if (!guide) return null;

  return (
    <div className="mt-4 border-t">
      <div className="prose p-4">
        <h3>{guide.title}</h3>
        <ol>
          {guide.steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
