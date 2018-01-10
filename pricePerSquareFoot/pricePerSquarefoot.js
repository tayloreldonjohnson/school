function totalPrice(sqEdge, pricePerSqFt) {	
	var totalCost = sqEdge   * sqEdge * pricePerSqFt;
	document.getElementById("totalCost").innerHTML = totalCost;	
	return totalCost;
}
totalPrice(10, 10);

