import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './AvailableMeals.module.css';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(()=> {
    const fetchMeals = async () => {
      const response = await fetch('https://food-order-app-1ba77-default-rtdb.firebaseio.com//meals.json')
      
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setMeals(loadedMeals);
      setisLoading(false);
    }
 
      fetchMeals().catch(error => {
        setisLoading(false);
        setError(error.message);
      });
  }, [])

  if (isLoading) {
    return <section className={styles.MealIsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (error) {
    return <section className={styles.MealsError}>
      <p>{error}</p>
    </section>
  }
  const mealsList = meals.map(meal => 
    <MealItem 
      id={meal.id}
      key={meal.id} 
      name={meal.name} 
      description={meal.description} 
      price={meal.price}
    />
  )
  return (
    <section className={styles.meals}>
      <Card>
        {mealsList}
      </Card>
    </section>
  )
}

export default AvailableMeals;