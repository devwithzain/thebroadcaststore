import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";

const Policies = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);

}, [])
  return (
    <Grid>

    <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading">Policies</h1>
          </div>
        </Container>
      </div>
    
      <Grid className="policy-sec">
       <Container>
       
       <Grid className="pol-con-grid">
        <Typography variant="h4">Pricing</Typography>
        <p>BroadcastStore.co makes every attempt to ensure our pricing is as accurate and current as possible. However, mistakes can happen. Pricing is subject to change. If your item is subject to this change, we will contact you before invoicing and shipping your item.</p>
       </Grid>

       <Grid className="pol-con-grid">
        <Typography variant="h4">Availability</Typography>
        <p>All non” as-is” items are subject to our quality control check. If an item fails to meet our quality standards, we reserve the right to withhold the sale of this item. If your item fails to meet are high standards, you will be contacted and alternative arrangements may be made. Broadcaststore.co makes every attempt to ensure that our inventory listings are as accurate and current as possible. However, mistakes can happen. Availability is subject to change. If your item is subject to this change, we will contact you and alternative arrangements may be made. In some instances Broadcaststore.co uses third parties to fulfill orders. If we are unable to obtain your item we will contact you and alternative arrangements may be made.</p>
       </Grid>

       <Grid className="pol-con-grid">
        <Typography variant="h4">Rental policies</Typography>
        <Typography variant="h5">INSURANCE REQUIREMENTS</Typography>
        <p>Rental clients are responsible for insuring rental equipment and are liable for any loss or damage to the equipment other than normal wear and tear.  These standards are set solely by BroadcastStore.co Inc. dba Broadcaststore.co. To better process your rental order please email or fax insurance certificate as soon as possible, preferably days before your actual rental date.  Insurance certificate or faxed copy must be received before equipment is released for proper verification.</p>
         
         <p><b>Rental Clients must provide:</b></p>
         <ul>
          <li>Insurance certificate naming BroadcastStore.co Inc. dba Broadcaststore.co as the Certificate Holder with a $1,000,000 General Liability policy.  THE FOLLOWING LANGUAGE MUST APPEAR ON THE CERTIFICATE:
           <ol>
            <li>“CERTIFICATE HOLDER shown is added as an ADDITIONAL INSURED and LOSS PAYEE as respects to the MISCELLANEOUS RENTED EQUIPMENT."</li>
            <li>A SEPARATE POLICY NUMBER (rider), must be written on the certificate in the "OTHER" section, showing:  RENTED or MISC. EQUIPMENT IS COVERED; COVERAGE DATES; LIMITS (Value of Equipment) and DEDUCTIBLE AMOUNT.</li>
           </ol>
          </li>
          <li>The policy expiration date must not be earlier than 3 days after the package return date.</li>
          <li>Every rental requires a deposit. This deposit amount is based on your issued deductible listed on the Insurance Certificate under miscellaneous and/or rented equipment section.  This amount is only held, not actually charged.  Once the equipment has been returned with no discrepancies or current balance due, the deposit will be released.  Please allow a minimum of 48 hours.  Upon return of equipment to BroadcastStore.co Inc. dba Broadcaststore.co, any discrepancies found will be reported to the customer verbally and by a Repair/Loss/Damage Report.</li>
          <li>BroadcastStore.co Inc. dba Broadcaststore.co accepts cash, wire transfers, paypal payments, certified check, credit card or money order for deposit.  Debit cards with the Visa or MasterCard logo are NOT accepted.  International rental require prepayment and security deposit in full.</li>
         </ul>
         <p>We strongly encourage the rental client to carefully inspect and test the equipment before accepting it for rental.  A prep day is provided for camera packages at no extra charge.</p>
        </Grid>

       <Grid className="pol-con-grid">
        <Typography variant="h4">Equipment and Service limited Warranty</Typography>
        <p>We stand behind the equipment we sell. Most used equipment items we sell feature a 30 days labor and 30 days on parts limited warranty, or a 30 day labor and 90 days on parts limited warranty directly from Broadcaststore.co. Items sold for "parts only" or "as is" or are notated as "no warranty" do not have any warranty coverage. We do not warranty heads, drums, CRTs, preventive maintenance parts or labor, misuse or accidental damage of the equipment. Concerning hard drive or storage, we do not provide and we do not offer data recovery , we do not cover the value of any data that cannot be recovered. CCD/Monitor/Plasma Display Panel Failures in camera CCD, monitor or plasma display panel picture elements (i.e., pixels) resulting from “image burn in” are not covered under warranty.
        If you have any questions, please contact us and we'll be happy to provide a detailed written copy of our used equipment limited warranty terms and conditions and answer any questions you may have prior to your purchase.</p>
       </Grid>

       <Grid className="pol-con-grid">
        <Typography variant="h4">New Items limited Warranty</Typography>
        <p>New items carry a manufacturer’s warranty. These manufacturer’s warranties vary and should be handled directly through the manufacturer.</p>
       </Grid>

       <Grid className="pol-con-grid">
        <Typography variant="h4">Rental limited Warranty</Typography>
        <p>Details are provided with your quote or contract.</p>
       </Grid>

       <Grid className="pol-con-grid">
        <Typography variant="h4">Used Equipment Returns</Typography>
        <ul>
        <li>An RMA is required before any item can be returned. Call 747-609-5599 for your RMA authorization.</li>
        <li>An RMA can only be requested on items within 3 days of receipt of item.</li>
        <li>Defective items may be repaired or exchanged at our discretion for the same model or manufacturer's equivalent model.</li>
        <li>RMA numbers are valid for 10 days.</li>
        <li>Broadcaststore.co is not responsible for any consequential or incidental damage resulting from the sale or use of any merchandise bought from us. We are responsible for the monetary value of the merchandise only.</li>
        <li>Returns will be charged a 20% restocking fee.</li>
        </ul>
       </Grid>

       <Grid className="pol-con-grid">
        <Typography variant="h4">New Equipment Returns</Typography>
        <ul>
        <li>An RMA is required before any item can be returned. Call 747-609-5599 for your RMA authorization.</li>
        <li>An RMA can only be requested on items within 3 days of receipt of item.</li>
        <li>All returned or exchanged items must be in new condition, in their original box, and must include all packing material, blank warranty cards, manuals, and all accessories.</li>
        <li>Items with timers must show less than 120 minutes of use.</li>
        <li>Broadcaststore.co is not responsible for personal data or items left in returned merchandise.</li>
        <li>Defective items may be repaired or exchanged at our discretion for the same model or manufacturer's equivalent model.</li>
        <li>RMA numbers are valid for 10 days.</li>
        <li>Broadcaststore.co is not responsible for any consequential or incidental damage resulting from the sale or use of any merchandise bought from us. We are responsible for the monetary value of the merchandise only.</li>
        <li>Returned items will be charged a 20% restocking fee</li>
        <li>No Return/Exchange On:
           <ol>
           <li>TVs, combos and monitors 37" and larger once opened</li>
           <li>All consumable items (e.g., film, tapes, paper, bulbs, CD, DVDs, etc.) once unwrapped</li>
           <li>Computers, Software and Hardware once unwrapped</li>
           <li>Any computers built or modified by Broadcaststore.co to customer’s specifications</li>
           <li>Special Order merchandise</li>
           </ol>
           </li>
           </ul>
       </Grid>  

       <Grid className="pol-con-grid">
        <Typography variant="h4">Accepted Payments</Typography>
        <Typography variant="h5">Credit Card</Typography>
        <p>We accept the following credit cards: MasterCard, Visa, American Express, and Discover</p>
        <p><b>Wire Transfer</b> You may place an order by phone and pay via wire transfer. For wire transfer/Our bank information contact your Account Executive or our office.</p>
        <p>Additional bank fees that may apply are the sole responsibility of the customer. The Broadcaststore.co Order number must be transmitted to us with the wire transfer in order to ensure the proper application of funds to the transaction.</p>
       
        <Typography variant="h5">Check and Cash on Delivery (COD)</Typography>
        <p>To pay by check or COD, please place your order by phone at <b>747-609-5599</b>. (US customers only)   </p>
        </Grid>
       
        <hr></hr>
        
       <Grid className="pol-con-grid sml-font">
        <Typography variant="h4">Websites PRIVACY POLICY <b>includes BroadcastStore.co.</b></Typography>
        <p>This privacy policy discloses the privacy practices for BroadcastStore.co web sites. This privacy policy applies solely to information collected by these web sites. It will notify you of the following:</p>
        <ul>
         <li>1. What personally identifiable information is collected from you through the web site, how it is used and with whom it may be shared.</li>
         <li>2. What choices are available to you regarding the use of your data.</li>
         <li>3. The security procedures in place to protect the misuse of your information.</li>
         <li>4. How you can correct any inaccuracies in the information.</li>
         <li>5. You need to register through mailer mailer and give your authorization to receive our EBlast.</li>
        </ul>
        </Grid>

        <Grid className="pol-con-grid">
        <p>Information Collection, Use, and Sharing</p>
        <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
        <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>
        <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
       </Grid>

       <Grid className="pol-con-grid">
        <p>Your Access to and Control Over Information</p>
        <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
        <ul>
         <li>See what data we have about you, if any.</li>
         <li>Change/correct any data we have about you.</li>
         <li>Have us delete any data we have about you.</li>
         <li>Express any concern you have about our use of your data.</li>
        </ul>
        </Grid>

        <Grid className="pol-con-grid">
        <Typography variant="h4">Security</Typography>
        <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
        <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for "https" at the beginning of the address of the web page.</p>
        <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
        </Grid>

        <Grid className="pol-con-grid">
        <Typography variant="h4">Updates</Typography>
        <p><b>Our Privacy Policy may change from time to time and all updates will be posted on this page.</b></p>
        <p><b>If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at <b>747-609-5599</b> or via email to <b>suzy@thebroadcaststore.co</b>.</b></p>
        </Grid>

        <Grid className="pol-con-grid">
        <Typography variant="h4">Registration:</Typography>
        <p>In order to use some of the special features of our websites, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address). This information is used to contact you about the products/services on our site in which you have expressed interest. At your option, you may also provide demographic information about yourself, but it is not required.</p>
        </Grid>

        <Grid className="pol-con-grid">
        <Typography variant="h4">Orders:</Typography>
        <p>We request information from you on our order form. To buy from us, you must provide contact information (like name and shipping address) and financial information (like credit card number, expiration date). This information is used for billing purposes and to fill your orders. If we have trouble processing an order, we'll use this information to contact you.</p>
        </Grid> 

       
       <hr></hr>
       </Container>
      </Grid>
    
    </Grid>
  )
}

export default Policies