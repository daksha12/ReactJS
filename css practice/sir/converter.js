$(document).ready(function () {
    let inputtypevalue, resulttypevalue;

    var input = $("#input");
    var result = $("#result");
    var inputtype = $("#inputtype");
    var resulttype = $("#resulttype");

    input.on("keyup", myresult);
    inputtype.on("change", myresult);
    resulttype.on("change", myresult);

    function myresult() {

        let a = inputtype.val();
        let b = resulttype.val();
        let res = result.val();
        let int = input.val();


        if (a === "meter" && b === "kilometer") {


            res = Number(int) * 0.001;

            result.val(res)
        }

        else if (a === "meter" && b === "cm") {

            res = Number(int) * 100;

            result.val(res)


        } else if (a === "meter" && b === "meter") {

            res = Number(int);
            result.val(res)
        } else if (a === "kilometer" && b === "meter") {

            res = Number(int) * 1000;
            result.val(res)
        } else if (a === "kilometer" && b === "cm") {
            res = Number(int) * 100000;
            result.val(res)
        } else if (a === "kilometer" && b === "kilometer") {
            res = Number(int);
            result.val(res)
        } else if (a === "cm" && b === "kilometer") {
            res = Number(int) * 0.00001;
            result.val(res)
        } else if (a === "cm" && b === "meter") {
            res = Number(int) * 0.01;
            result.val(res)
        } else if (a === "cm" && b === "cm") {
            res = Number(int);
            result.val(res)
        }
    }
});
