
// $(document).ready(function() {
var assert = chai.assert;
describe('filter', function(){
	beforeEach(function(){
		this.list = [];
		this.e = $.Event("keypress");
      	this.e.which = this.e.keyCode = 13;

	});

	describe('One word filter', function(){
		beforeEach(function() {
	      this.text = "abbreviation";
	      document.getElementById("searchbar-attr").value = this.text;
	      
	    });

		it('will return a filtered list', function(){
			this.list = trySearch(this.e);
			assert.deepEqual(this.list, ["academic-credentials", "grade-schemes", "instructional-methods", "subjects"]);
		});
		it('will filter with a valid boolean expression', function(){
			var expExpr = '(attribs[name].indexOf("abbreviation")!=-1)';
			var expr = buildIfStatement(this.text);
			assert.equal(expr, expExpr);
		});
	});

	describe('Two word filter, no parens', function(){
		beforeEach(function() {
	      this.text = "abbreviation and type";
	      document.getElementById("searchbar-attr").value = this.text;
	    });

		it('will return a filtered list', function(){
			this.list = trySearch(this.e);
			assert.deepEqual(this.list, ["academic-credentials"]);
		});
		it('will filter with a valid boolean expression', function(){
			var expExpr = '(attribs[name].indexOf("abbreviation")!=-1)&&(attribs[name].indexOf("type")!=-1)';
			var expr = buildIfStatement(this.text);
			assert.equal(expr, expExpr);
		});
	});

	describe('Two word filter, with parens', function(){
		beforeEach(function() {
	      this.text = "(abbreviation and type)";
	      document.getElementById("searchbar-attr").value = this.text;
	    });

		it('will return a filtered list', function(){
			this.list = trySearch(this.e);
			assert.deepEqual(this.list, ["academic-credentials"]);
		});
		it('will filter with a valid boolean expression', function(){
			var expExpr = '((attribs[name].indexOf("abbreviation")!=-1)&&(attribs[name].indexOf("type")!=-1))';
			var expr = buildIfStatement(this.text);
			assert.equal(expr, expExpr);
		});
	});
	describe('Three word filter, with nested parens', function(){
		beforeEach(function() {
	      this.text = "(abbreviation and (type or effectiveStartDate))";
	      document.getElementById("searchbar-attr").value = this.text;
	    });

		it('will return a filtered list', function(){
			this.list = trySearch(this.e);
			assert.deepEqual(this.list, ["academic-credentials", "grade-schemes"]);
		});
		it('will filter with a valid boolean expression', function(){
			var expExpr = '((attribs[name].indexOf("abbreviation")!=-1)&&((attribs[name].indexOf("type")!=-1)||(attribs[name].indexOf("effectiveStartDate")!=-1)))';
			var expr = buildIfStatement(this.text);
			assert.equal(expr, expExpr);
		});
	});

	describe('Four word filter, no nested parens', function(){
		beforeEach(function() {
	      this.text = "(abbreviation and title) and (type or effectiveStartDate)";
	      document.getElementById("searchbar-attr").value = this.text;
	    });

		it('will return a filtered list', function(){
			this.list = trySearch(this.e);
			assert.deepEqual(this.list, ["academic-credentials", "grade-schemes"]);
		});
		it('will filter with a valid boolean expression', function(){
			var expExpr = '((attribs[name].indexOf("abbreviation")!=-1)&&(attribs[name].indexOf("title")!=-1))&&((attribs[name].indexOf("type")!=-1)||(attribs[name].indexOf("effectiveStartDate")!=-1))';
			var expr = buildIfStatement(this.text);
			assert.equal(expr, expExpr);
		});
	});

	describe('Extra bracket, closed', function(){
		beforeEach(function() {
	      this.text = "())";
	    });

		it('will return the right error message', function(){
			var expMsg = "())" + '\n' + "  ^" + '\n' + "Error: unexpected close parenthesis."
			assert.equal(checkBrackets(this.text), expMsg);
		});
	});

	describe('Extra bracket, open', function(){
		beforeEach(function() {
	      this.text = "(()";
	    });

		it('will return the right error message', function(){
			var expMsg = "(()" + '\n' + "   ^" + '\n' + "Error: expected close parenthesis."
			assert.equal(checkBrackets(this.text), expMsg);
		});
	});

	describe('Extra bracket, muliple inner closed', function(){
		beforeEach(function() {
	      this.text = "()()()()()())";
	    });

		it('will return the right error message', function(){
			var expMsg = "()()()()()())" + '\n' + "            ^" + '\n' + "Error: unexpected close parenthesis."
			assert.equal(checkBrackets(this.text), expMsg);
		});
	});

	describe('Extra bracket, multiple inner open', function(){
		beforeEach(function() {
	      this.text = "(()()()";
	    });

		it('will return the right error message', function(){
			var expMsg = "(()()()" + '\n' + "       ^" + '\n' + "Error: expected close parenthesis."
			assert.equal(checkBrackets(this.text), expMsg);
		});
	});

});
// });