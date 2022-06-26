const FIREBASE_DOMAIN = "https://expensesdate-default-rtdb.firebaseio.com"; // firebase  фейк-бекенд данныйлар ушул жака POST жана GET болот

export async function getAllExpenses() {
  //ассинхронная ф/я ал getRecuest учун
  const response = await fetch(`${FIREBASE_DOMAIN}/expenses.json`);
  const data = await response.json();
console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedExpense = [];

  for (const key in data) {
    const expenseObj = {
      id: key,
    title:data[key].title,
    amount: data[key].amount,
    date: new Date(data[key].date)
    };

    transformedExpense.push(expenseObj);
  }

  return transformedExpense;
}

export async function getSingleExpense(expenseId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/expenses/${expenseId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedExpense = {
    id: expenseId,
    ...data,
  };

  return loadedExpense;
}

export async function addExpense(expenseData) {
    console.log(expenseData);
  const response = await fetch(`${FIREBASE_DOMAIN}/expenses.json`, {
    method: "POST",
    body: JSON.stringify(expenseData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function addComment(expenseData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${expenseData.expenseId}.json`,
    {
      method: "POST",
      body: JSON.stringify(expenseData.expenseData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { expenseId: data.name };
}
