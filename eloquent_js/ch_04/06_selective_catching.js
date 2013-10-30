
for (;;) {
	try	{
		alert(inputNumber() + 5);
		break;
	} catch (e) {
		alert("You did not input a number, try again.");
	}
}