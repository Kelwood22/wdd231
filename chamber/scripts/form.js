
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get("first"));
console.log(myInfo.get("last"));
console.log(myInfo.get("email"));
console.log(myInfo.get("phone"));
console.log(myInfo.get("business"));
console.log(myInfo.get("timestamp"));

document.querySelector("#results").innerHTML = `
<h2>Thank you for becoming a member of the Hogsmeade Chamber of Commerce!</h2>
<p>Welcome ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Your email: ${myInfo.get("email")}</p>
<p>Your phone: ${myInfo.get("phone")}</p>
<p>Your business: ${myInfo.get("business")}</p>
<p>Timestamp: ${myInfo.get("timestamp")}</p>
<p>We will be in touch with you soon!</p>
`;