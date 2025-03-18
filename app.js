const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs"); // for ejs
app.use(express.static(path.join(__dirname, "public"))); // for serving static files
app.use(bodyParser.urlencoded({ extended: true })); // body parser for POST method

app.get("/", (req, res) => {
    res.render("home");
});



app.post("/submit", (req, res) => {

    try{
        let values = req.body;
        let A1 = Number(values.A1) || 0;
        let B1 = Number(values.B1) || 0;
        let C1 = Number(values.C1) || 0;
        let D1 = Number(values.D1) || 0;
        let E1 = Number(values.E1) || 0;
        let F1 = Number(values.F1) || 0;
        let G1 = Number(values.G1) || 0;
        let H1 = Number(values.H1) || 0;
    
    
        let A2 = Number(values.A2) || 0;
        let B2 = Number(values.B2) || 0;
        let C2 = Number(values.C2) || 0;
        let D2 = Number(values.D2) || 0;
        let E2 = Number(values.E2) || 0;
        let F2 = Number(values.F2) || 0;
        let G2 = Number(values.G2) || 0;
        let H2 = Number(values.H2) || 0;
    
        let tax = 18 / 100;
    
        let firstRevenue = A1 + B1 + C1 + D1;
        let secondRevenue = A2 + B2 + C2 + D2;
        let firstExpenses = E1 + F1 + G1 + H1;
        let secondExpenses = E2 + F2 + G2 + H2;
    
        let firstProfitBeforeTax = firstRevenue - firstExpenses;
        let secondProfitBeforeTax = secondRevenue - secondExpenses;
    
        let firstProfitAfterTax = firstProfitBeforeTax - (firstProfitBeforeTax * tax);
        let secondProfitAfterTax = secondProfitBeforeTax - (secondProfitBeforeTax * tax);
    
        let data = {
            Aprofit: firstRevenue,
            Bprofit: secondRevenue,
            Aloss: firstExpenses,
            Bloss: secondExpenses,
            Apbt: firstProfitBeforeTax,
            Bpbt: secondProfitBeforeTax,
            Apat: firstProfitAfterTax,
            Bpat: secondProfitAfterTax,
            A1: values.A1,
            B1: values.B1,
            C1: values.C1,
            D1: values.D1,
            E1: values.E1,
            F1: values.F1,
            G1: values.G1,
            H1: values.H1,
            A2: values.A2,
            B2: values.B2,
            C2: values.C2,
            D2: values.D2,
            E2: values.E2,
            F2: values.F2,
            G2: values.G2,
            H2: values.H2,
        };
    
        res.render("display", { data });
    }catch(e){
        console.error("Error during Form Processing",e);
        res.status(500).render("home",{ errors: ["Something Went Wrong."] });
    }
        
    
});
// Handling POST form-request


// server listining
app.listen(8080, () => {
    console.log("Listining on Port 8080");
});
