import express from 'express';
import productsRoutes from './routes/productsRoutes';
import categoriesRoutes from './routes/categoriesRoutes';

const app = express();

app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);

app.all('/', (req, res) => {
  res.send('Oi');
});

app.listen(process.env.PORT || 3000);
