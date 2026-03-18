<<<<<<< HEAD
// STEP 6: Nab all the SUMMARY elements
=======
// STEP 6: Nab all the DETAILS elements
>>>>>>> 5272845cd134eb175712c553850464d044e333f4
const details = document.querySelectorAll("details");

// STEP 7: Loop through the element array, and add an event listener for the toggle event
details.forEach((detail) => {
	//console.log(detail);
	detail.addEventListener("toggle", (event) => {
<<<<<<< HEAD
		// console.log("Toggled!");

		// STEP 8a: Check to see whether the DETAILS event that was toggled has the "open" attribute
		if (event.target.open) {

			// STEP 8b: The browser just added the "open" attribute, so this DETAILS element was previously closed
			details.forEach((detail) => {

				// STEP 8c: If this DETAILS element is NOT the one that was just clicked, close it by removing the "open" attribute
				if(detail !== event.target) {
					detail.removeAttribute("open");
				}
			});	
		}		
	});
});
=======
		// console.log("Toggled!" + event);
		// STEP 8a: Check to see whether the DETAILS event that was toggled has the "open" attribute
		if (event.target.open) {
			// STEP 8b: The browser just added the "open" attribute, so this DETAILS element was previously closed
			details.forEach((detail) => {
				// STEP 8c: If this DETAILS element is NOT the one that was just clicked, close it by removing the "open" attribute
				if (detail !== event.target) {
					detail.removeAttribute("open");
				}
			});
		}		
	});		
});

>>>>>>> 5272845cd134eb175712c553850464d044e333f4
// This experiment based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
