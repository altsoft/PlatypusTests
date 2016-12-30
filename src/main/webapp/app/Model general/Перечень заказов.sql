/**
 * @name 124349292311931632
 * @public
*/
Select goodOrder.ORDER_ID, goods.GOOD_NAME, goodOrder.AMOUNT, 
customers.CUSTOMER_NAME, customers.CUSTOMER_ADDRESS 
From GOODORDER goodOrder
 Inner Join GOOD goods on goodOrder.GOOD = goods.GOOD_ID
 Inner Join CUSTOMER customers on goodOrder.CUSTOMER = customers.CUSTOMER_ID
 Where :AMOUNT <= goodOrder.AMOUNT
 Order by customers.CUSTOMER_NAME asc