const express = require('express');
const app = express();

songs=['Sgt. Peppers Lonely Hearts Club Band',
    'With a Little Help from My Friends',
    'Lucy in the Sky with Diamonds',
    'Getting Better' ,
    'Fixing a Hole',
    'Shes Leaving Home',
    'Being for the Benefit of Mr. Kite!' ,
    'Within You Without You',
    'When Im Sixty-Four',
    'Lovely Rita',
    'Good Morning Good Morning',
    'Sgt. Peppers Lonely Hearts Club Band (Reprise)',
    'A Day in the Life'];

app.use('/static', express.static('public'));
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('listwithloop', (songs));
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000...');
});