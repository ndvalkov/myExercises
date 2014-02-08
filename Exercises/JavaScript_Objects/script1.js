var pnt1; var pnt2; var dist;

var line1 = {
	A: pnt1,
	B: pnt2,
	distance: dist
}

var line2 = {
	A: pnt1,
	B: pnt2,
	distance: dist
}

var line3 = {
	A: pnt1,
	B: pnt2,
	distance: dist
}

function Point(xCoor, yCoor) {
    this.xCoor = xCoor;
	this.yCoor = yCoor;
	var pointArr = [xCoor, yCoor];
	return pointArr;
}


function generateRandomPoint() {
    var xC = parseInt(Math.random() * 10) * (Math.random()<0.50001 ?(-1):(1));
	var yC = parseInt(Math.random() * 10) * (Math.random()<0.50001 ?(-1):(1));
	var pnt = new Point(xC, yC);
	return pnt;
}

function printRandomPoint1() {
	pnt1 = generateRandomPoint();
	document.getElementById("ResultArea1").value = "P(" + pnt1 + ")";
}

function printRandomPoint2() {
	pnt2 = generateRandomPoint();
	document.getElementById("ResultArea2").value = "P(" + pnt2 + ")";
}

// d = sqrt( (x2 - x2)+(y2 - y2) )

function calculateDistance() {
    
	var sq = (pnt2[0] - pnt1[0])*(pnt2[0] - pnt1[0]) + (pnt2[1] - pnt1[1])*(pnt2[1] - pnt1[1]);
	dist = Math.sqrt(sq);
	
	document.getElementById("resultArea").value = dist;
}

function fillLine1() {
    line1.A = pnt1;
	line1.B = pnt2;
	line1.distance = dist;
	
	document.getElementById("line1").value = "L1(P1(" + pnt1 + "),P2(" + pnt2 + "))" + "Dist: " + dist;
}


function fillLine2() {
    line2.A = pnt1;
	line2.B = pnt2;
	line2.distance = dist;
	
	document.getElementById("line2").value = "L2(P1(" + pnt1 + "),P2(" + pnt2 + "))" + "Dist: " + dist;
	
}

function fillLine3() {
    line3.A = pnt1;
	line3.B = pnt2;
	line3.distance = dist;
	
	document.getElementById("line3").value = "L3(P1(" + pnt1 + "),P2(" + pnt2 + "))" + "Dist: " + dist;
}

function checkTriangle() {
    
	if ((line1.distance < (line2.distance + line3.distance)) && (line3.distance < (line2.distance + line1.distance)) && (line2.distance < (line1.distance + line3.distance))) {
	    document.getElementById("finalResult").value = "Positive"
	} else{
		document.getElementById("finalResult").value = "Negative"
	}
	
}

