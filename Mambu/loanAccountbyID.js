//API GET Request to fetch all loan accounts

const apiURL = "";
const apiQuery = "";
const idQuery = "";
const endPoint = `${apiURL}${apiQuery}/${idQuery}`;

//Headers
const headersList = {
    Accept: "application/vnd.mambu.v2+json",
    "content=type": "application/json",
    apiKey: ""
}

//Async Function to fetch API

const getLoanAccountbyID = async () => {
    try {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: headersList,
        });

        if (response.ok) {
            const jsonResponse = await response.jason();
            console.log(jsonResponse);

            // Using destructuring to select those parameters required
            const {
                id,
                taxRate,
                interestSettings,
                loanAmount,
                balances,
                scheduleSettings,
            } = jsonResponse;

            //verifying destructuring
            console.log(id);
            console.log(balances.principalBalance);
            console.log(balances.feesDue);
            console.log(balances.interestBalance);
            console.log(scheduleSettings.repaymentInstalments);
            console.log(interestSettings.interestRate);

            //Calculate APR
            let topHalf = (balances.feesDue + balances.interestBalance) / balances.principalBalancel
            let daysLoan = scheduleSettings.repaymentInstalments * 30;

            //Printing Results
            console.log("APR Calculation is");
            let result = (topHalf / daysLoan) * 365 * 100;
            console.log(result);
        }

        //Another way
        let apr2r = ((balances.feesDue + balances.interestBalance) / balances.principalBalance / (4 * 365)) * (365 * 100);
        console.log(apr2r);
    } catch (error) {
        console.log(error);
    }
};

console.log(`Loan Account with ID $(idQuery)`);
console.log(getLoanAccountbyID());
