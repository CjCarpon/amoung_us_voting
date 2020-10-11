var scores = {
	num1 : 0,
	num2 : 0,
	num3 : 0,
	num4 : 0,
	num5 : 0,
	num6 : 0,
	num7 : 0,
	num8 : 0,
	num9 : 0,
	num10 : 0,	
var1 : {
		var2 : 1,
		var3: 2
}


}
// JSON

$(document).ready(
	function(){

	$("#vote1").click(
			function(){
				console.log("num1");
				scores.num1++;
				$("#p1vote").html(scores.num1);
			}
		);

	$("#vote2").click(
			function(){
				console.log("num2");
				scores.num2++;
				$("#p2vote").html(scores.num2);
			}
		);

	
	$("#vote3").click(
			function(){
				console.log("num3");
				scores.num3++;
				$("#p3vote ").html(scores.num3);
			}
		);

	
	$("#vote4").click(
			function(){
				console.log("num4");
				scores.num4++;
				$("#p4vote ").html(scores.num4);
			}
		);

	
	$("#vote5").click(
			function(){
				console.log("num5");
				scores.num5++;
				$("#p5vote ").html(scores.num5);
			}
		);

	
	$("#vote6").click(
			function(){
				console.log("num6");
				scores.num6++;
				$("#p6vote").html(scores.num6);
			}
		);

	
	$("#vote7").click(
			function(){
				console.log("num7");
				scores.num7++;
				$("#p7vote ").html(scores.num7);
			}
		);

	
	$("#vote8").click(
			function(){
				console.log("num8");
				scores.num8++;
				$("#p8vote ").html(scores.num8);
			}
		);

	
	$("#vote9").click(
			function(){
				console.log("num9");
				scores.num9++;
				$("#p9vote ").html(scores.num9);
			}
		);

	
	$("#vote10").click(
			function(){
				console.log("num10");
				scores.num10++;
				$("#p10vote ").html(scores.num10);
			}
		);
	}
);
