const { commit } = require('../DB/connection');
const connection = require('../DB/connection')
//   Standard:"",
    // Small: "",
    // Medium: "",
    // Large:"",
    // ExtraLarge: "",
    // Code:"",
    // Name:"",
    // Catagory:"",
    // Price:"",
    // Fourtytwo: "",
    // Fourty:"",
    // Thirtyeight:"",
    // Thirtysix:"",
    // Thirtyfour:"",
    // Thirtytwo:"",
    // Thirty:"",
    // Twentyeight:"",
    // Twentysix:"",
    // Twentyfour:"",
    // Twentytwo:"",
    // Twenty:"",
    // Eightheen:"",
    // Sixtheen:"",   
   


const adddproduct = (req,res)=>{
    const {Code, Name, Catagory, Price,Sixtheen, Eighteen,Twenty,Twentytwo,Twentyfour,Twentysix,Twentyeight,Thirty,Thirtytwo,Thirtyfour,Thirtysix,Thirtyeight,Fourty,Fourtytwo} = req.body;

    if(!Code || !Name || !Catagory || !Price){
        res.status(500).json("Please fill the field")
    }
    try {
        connection.query('SELECT * FROM products WHERE ?',Code,(error,result)=>{
            if(result.length){
                res.status(422).json("Product Id must be change")
            }else{
                connection.query("INSERT INTO products SET ?",{Code, Name, Catagory, Price,Sixtheen, Eighteen,Twenty,Twentytwo,Twentyfour,Twentysix,Twentyeight,Thirty,Thirtytwo,Thirtyfour,Thirtysix,Thirtyeight,Fourty,Fourtytwo},(error,result)=>{
                    if(error){
                        res.status(422).json(error)
                    }else{
                        res.status(201).json(req.body)
                    }
                })
            }
        })
    } catch (error) {
        
    }
    
}

module.exports = adddproduct;