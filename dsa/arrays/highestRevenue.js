/*
Problem statement : 
Amit is a salesman who wishes to know the maximum revenue received from a given item of the N products each day . 
Amit has a sales record of N products for M days.
Help amit to find the highest revenue received each day.

Input : 
The first line of the input consists of two space-separated integers- day(M) and item(N) representing the days and the products in the sales record.

The next M lines consist of N space separated integers representing the sales revenue from each product each day.

Output: 
Print m space-separated integers representing the maximum revenue received each day .

Example Input:
3 4
101 123 234 344
143  282 499 493
283 493 202 304

Output:
344 499 493
*/

//no  of days = m 
//no. of products = n

function highestRevenue(m,n, salesArr) {
    let maxSalesArr = []

    for (let i = 0; i < m; i++) {
      let maxRevenue = -Infinity
      
      for (let j = 0; j < n; j++) {
        if(salesArr[i][j] > maxRevenue) {
          maxRevenue = salesArr[i][j]
        }
      }
      maxSalesArr.push(maxRevenue)
    }
    
    return maxSalesArr
  }
  
  let salesArr = [ 
  [101, 123, 234, 344],
  [143, 282, 499, 493],
  [283, 493, 202, 304],
  ]
  
  console.log(highestRevenue(3,4,salesArr))