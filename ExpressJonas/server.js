//start server
const app=require('./app')
const PORT = 3000;
app.listen(PORT, () => {
  console.log('server running on 3000...');
});
