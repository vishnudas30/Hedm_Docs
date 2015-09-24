var attribs = {"academic-catalogs":["metadata","id","title","description","startOn","endOn","status","organization"],"academic-credentials":["metadata","id","title","abbreviation","description","type"],"academic-disciplines":["metadata","id","title","description","type"],"academic-histories":["metadata","id","description","person","organization","credential","disciplines","startOn","endOn","grade","recognitions","thesis"],"academic-honors":["metadata","id","title","description","type","organization"],"academic-levels":["metadata","id","code","title","description"],"academic-periods":["metadata","id","code","title","description","start","end","category"],"account-components":["metadata","id","title","description"],"administrative-periods":["metadata","id","code","title","description","start","end","category"],"appeal-purposes":["metadata","id","title","description"],"appeal-types":["metadata","id","title","description"],"appeals":["metadata","id","title","description","type","purpose","contactMethod","vendors","status","startOn","endOn","fundRaisingTarget","budgetedExpense","actualExpense","targets","assignments"],"areas-of-giving":["metadata","id","title","description"],"buildings":["metadata","id","code","title","description","site"],"campaign-categories":["metadata","id","title","code","description"],"campaign-types":["metadata","id","title","description"],"campaigns":["metadata","id","title","description","fundRaisingTarget","budgetedExpense","actualExpense","category","type","status","startOn","endOn","appeals","targets","assignments"],"comments":["metadata","id","content","createdBy","createdOn","modifiedBy","modifiedOn"],"compensation-levels":["metadata","id","title","description","level","currencyCode","frequency"],"constituent-activities":["metadata","id","constituent","activityType","participationType","startOn","endOn","source"],"constituent-activity-categories":["metadata","id","title","description"],"constituent-activity-types":["metadata","id","title","description","category"],"constituent-donation-interests":["metadata","id","description","constituent","type","area","purpose","level","donations","organizations","startOn","endOn","source"],"constituent-participation-types":["metadata","id","title","description"],"constituent-types":["metadata","id","title","description","vseSource"],"constituents":["metadata","id","constituent","types"],"course-levels":["metadata","id","code","title","description"],"courses":["metadata","id","title","description","subject","courseLevels","instructionalMethods","owningOrganizations","effectiveStartDate","effectiveEndDate","number","academicLevels","gradeSchemes","credits"],"credit-categories":["metadata","id","code","title","description","parentCategory"],"definitions":["metadata","place","country","socialMediaType","personPhoneType","organizationPhoneType","personEmailType","organizationEmailType","personLocationType","organizationLocationType","donationCreditTypeSoftReason","donationCreditTypeHardReason","paymentStatusTypePaidReason","paymentStatusTypeUnpaidReason","vseSource","vsePurpose","vseSubPurpose","fundsRestrictionType","paymentMethod","roleTypes","month","monthDay","dayOfWeek","daysOfWeek","sectionRegisteredStatusReason","sectionNotRegisteredStatusReason","sourceReliabilityRating","rangeDescription","currencyCode","currency","personalRelationshipType","recurrence"],"designation-purposes":["metadata","id","title","description"],"designation-restrictions":["metadata","id","title","description"],"designation-types":["metadata","id","title","description"],"designations":["metadata","id","title","description","type","group","status","startOn","endOn","campus","generalLedgerAccounts","areaOfGiving","purpose","fundingGoal","vsePurpose","financialAidFunds","fundsRestriction","restrictions","organizations","comments","assignments"],"donation-credit-types":["metadata","id","title","description","creditType"],"donation-promises":["metadata","id","type","status","campaign","appeal","promiseAmount","donorAllocations","paymentStatus","comments","paymentSchedule"],"donation-types":["metadata","id","title","description"],"donations":["metadata","id","campaign","appeal","donorAllocations","payments","donationPromiseAllocations"],"donor-association-types":["metadata","id","title","description"],"donor-societies":["metadata","id","title","description","status","startOn","endOn","evaluationTimeFrame","donationTypes","creditTypes","constituentTypes"],"donor-society-levels":["metadata","id","title","description","status","startOn","endOn","donorSociety","range"],"donor-society-memberships":["metadata","id","donor","society","level","status","startOn","endOn"],"email-types":["metadata","id","title","description","code","type"],"employment-histories":["metadata","id","title","description","person","position","organization","location","startOn","endOn","positionLevel","employmentType","annualIncomeLevel","source"],"employment-position-levels":["metadata","id","title","description"],"employment-termination-reasons":["metadata","id","reason","detail"],"employment-types":["metadata","id","title","description"],"ethnicities":["metadata","id","code","title","description","ethnicCategory"],"external-donations":["metadata","id","donor","recipient","description","donatedOn","amount","currency"],"financial-aid-funds":["metadata","id","title","description"],"general-ledger-transactions":["metadata","id","ledgerDate","type","processMode","senderReference","transactionDetailLines"],"giving-capacity-ranges":["metadata","id","title","description","range","currencyCode"],"grade-schemes":["metadata","id","abbreviation","title","description","effectiveStartDate","effectiveEndDate"],"instructional-event-instances":["metadata","id","title","description","startDate","startTime","endDate","endTime","instructionalEvent","locations","instructors"],"instructional-events":["metadata","id","title","description","section","instructionalMethod","workLoad","startDate","endDate","startTime","endTime","recurrence","locations","instructorRoster","approvals"],"instructional-methods":["metadata","id","abbreviation","title","description"],"instructional-platforms":["metadata","id","code","title","description"],"interest-areas":["metadata","id","title","description"],"interest-levels":["metadata","id","title","description"],"interest-purposes":["metadata","id","title","description"],"interest-types":["metadata","id","title","description"],"location-types":["metadata","id","title","description","code","type"],"mailing-labels":["metadata","id","label"],"marital-statuses":["metadata","id","code","title","description","parentCategory"],"organization-emails":["id","type","status","preference","address"],"organization-locations":["id","description","type","status","preference","addressLines","place"],"organization-phones":["id","type","status","preference","countryCallingCode","number","extension"],"organization-size-levels":["metadata","id","title","description","level"],"organizations":["metadata","id","code","title","description","type","locations","phones","emails","socialMedia"],"payroll-deduction-requests":["metadata","id","person","paymentTarget","status","amountPerPayment","totalAmount","recurrence"],"person-emails":["id","type","status","preference","address"],"person-filters":["metadata","id","code","title","description"],"person-groups":["metadata","id","title","description","members"],"person-locations":["id","description","type","status","preference","addressLines","place","seasonalOccupancies"],"person-phones":["id","type","status","preference","countryCallingCode","number","extension"],"personal-relationship-types":["metadata","id","title","description","relationshipType"],"personal-relationships":["metadata","id","title","description","subjectPerson","relatedPersons"],"persons":["metadata","id","names","dateOfBirth","dateDeceased","gender","ethnicity","races","maritalStatus","roles","credentials","locations","phones","emails","socialMedia"],"phone-types":["metadata","id","title","description","type"],"proposal-purposes":["metadata","id","title","description"],"proposals":["metadata","id","title","description","prospects","state","startOn","endOn","askedOn","askAmount","plannedAskAmount","grantedAmount","receivedAmount","proposingOrganization","purposes","designations","closingProbablility","assignments"],"prospects":["metadata","id","title","description","prospects"],"races":["metadata","id","code","title","description","parentCategory"],"restriction-types":["metadata","id","code","title","description"],"roles":["metadata","id","title","description","type"],"rooms":["metadata","id","title","description","number","floor","occupancies","building"],"rooms_room-availability":["recurrence","site","building","occupancies"],"section-registration-statuses":["metadata","id","code","title","description","status"],"section-registrations":["metadata","id","registrant","section","status","approvals"],"sections-maximum":["metadata","id","title","description","startOn","endOn","code","number","instructionalPlatform","academicPeriod","administrativePeriod","course","credits","site","academicLevels","gradeSchemes","courseLevels","status","duration","maxEnrollment","instructionalEvents","owningOrganizations"],"sections":["metadata","id","title","description","startDate","endDate","code","number","instructionalPlatform","academicPeriod","administrativePeriod","course","credits","site","academicLevels","gradeSchemes","courseLevels","status","duration","maxEnrollment","owningOrganizations"],"sites":["metadata","id","code","title","description","organization"],"social-media-types":["metadata","id","title","description","type"],"social-media":["metadata","id","type","status","preference","address"],"source-contexts":["metadata","id","title","description"],"sources":["metadata","id","title","description","code","contexts","status"],"subjects":["metadata","id","abbreviation","title","description"],"wealth-ranges":["metadata","id","title","description","range","currencyCode"]};
function enterEvent(){
	var e = $.Event('keypress');
	e.which = 13;
	return e;
}

function trySearch(e){
	//Store the enter code.
	var code = (e.keyCode ? e.keyCode : e.which);
    //Get the text currently entered in the search bar.
	var text = String(document.getElementById("searchbar-attr").value);

	//execute search if enter is pressed
	var results = [];
	if(code == 13){
		//parse search query
		var ifStatement = buildIfStatement(text);
		for(var name in attribs){
			if(eval(ifStatement)){
				results.push(name);
			}
		}
		$("#scroll").find("li").each(function(){
		if(results.indexOf(reverseParse($(this).text()).trim())==-1){
			$(this).hide();
		}else{
			$(this).show();
		}
	});
	}
}

function reverseParse(name){
	name = name.toLowerCase();
	var names = name.split(" ");
	var retVal = "";
	for(var i = 2; i<names.length-1;i++){
		if(names[i]!=" "){
			retVal += names[i]+'-';
		}
	}
	retVal += names[names.length-1];
	return retVal;
}

function buildIfStatement(text){
	var ifStatement = "";
	var replaceAndExp =/\s*and\s*/g;
	var replaceOrExp =/\s+or\s+/g;
	text = text.replace(replaceAndExp, "&&");
	text = text.replace(replaceOrExp, "||");
	var splitExp = /&&|\|\|/g;
	var splitAttr = text.split(splitExp);
	var textIndex = 0;
	for(var i in splitAttr){
		if(text.indexOf(splitAttr[i])!=-1){
			var str = '(attribs[name].indexOf("'+splitAttr[i]+'")!=-1)';
			textIndex += splitAttr[i].length;
			var operator = text[textIndex];
			if(operator === undefined){
				operator = "";
			}
			ifStatement+= (str + operator + operator);
			textIndex+=2;
		}
	}
	return ifStatement;

} 
