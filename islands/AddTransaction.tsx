import { useState } from "preact/hooks";

export default function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("description", description);
    formData.append("wallet", wallet);

    try {
      const response = await fetch("/api/transaction", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle successful transaction addition
        setAmount("");
        setDescription("");
        setWallet("");
        alert("Transaction added successfully!");
      } else {
        // Handle error
        alert("Failed to add transaction.");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("An error occurred while adding the transaction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="p-4 bg-white shadow-md rounded-md">
      <h2 class="text-xl font-bold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-4">
          <label class="block text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onInput={(e) => setAmount((e.target as HTMLInputElement).value)}
            class="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onInput={(e) => setDescription((e.target as HTMLInputElement).value)}
            class="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Wallet</label>
          <input
            type="text"
            value={wallet}
            onInput={(e) => setWallet((e.target as HTMLInputElement).value)}
            class="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Transaction"}
        </button>
      </form>
    </div>
  );
}