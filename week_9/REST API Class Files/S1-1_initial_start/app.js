const express = require('express');
const app = express();

// const data = require('./data.json');
const records = require('./records');

app.use(express.json());

// Send a GET request to /quotes to READ a list of quotes
app.get ('/quotes', async (req,res) => {
    const quotes = await records.getQuotes();
    res.json(quotes);
});

// Send a GET request to quotes/:id to READ (view) a quote
app.get ('/quotes/:id', async (req,res) => {
    // const quoteId = req.params.id;
    const quote = await records.getQuote(req.params.id);
    res.json(quote);
})

// Send a POST request to /quotes to CREATE a new quote
// app.post('/quotes', async (req, res) => {
//     const quotes = await records.createQuote({
//         quote: req.body.quote,
//         author: req.body.author
//     })
//     res.json(quotes);
// })

app.post('/quotes', async (req,res) =>{
    try {
        if(req.body.author && req.body.quote){
            const quote = await records.createQuote({
                quote: req.body.quote,
                author: req.body.author
            });
            res.status(200).json(quote);
        } else {
            res.status(400).json({message: "Quote and author required."});
        }
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
app.put('/quotes/:id', async (req,res) => {
    const quote = await records.getQuote(req.params.id);

    if(quote) {
        quote.quote = req.body.quote;
        quote.author = req.body.author;

        await records.updateQuote(quote);
        res.json({message: "Quote successfully updated."});
        res.status(204).end();
    }
})

// Send a DELETE request to /quotes/:id DELETE a quote Il Send a GET request to /quotes/quote/random to READ (view) a random quote
app.delete('/quotes/:id', async(req,res) =>{
    const quote = await records.getQuote(req.params.id);
    await records.deleteQuote(quote);
    res.json({message: "Quote successfully deleted."});
})

app.listen(3000, () => console.log('Quote API listening on port 3000!'));
