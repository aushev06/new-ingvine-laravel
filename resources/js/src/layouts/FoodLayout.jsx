import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
import {FoodCard} from "../components/FoodCard";
import {CardsList} from "./CardListLayout";
import styles from './ChefList.module.scss'
import {CardSkeleton} from "../components/FoodCard/Skeleton";
import {InView} from "react-intersection-observer";
import {useDispatch} from "react-redux";
import {setActiveCategory} from "@/src/features/city/settingsSlice";

export const FoodLayout = ({categories, isLoading}) => {
    const dispatch = useDispatch();
    if (isLoading) {
        return (
            <div>
                <CardsList>
                    {Array.from({length: 8}, (_, item) => (
                        <div key={item} className={styles.chefsSkeleton}>
                            <CardSkeleton key={item}/>
                        </div>
                    ))}
                </CardsList>
            </div>
        )
    }

    const handleSectionInView = (inView, entry) => {
        if (inView) {
            dispatch(setActiveCategory(entry.target.id));
        }
    };

    return (
        <div>
            {
                categories.map(category => {
                    return (
                        <InView as={'div'} className={styles.items} id={category.id} key={category.id} onChange={handleSectionInView} rootMargin="0% 0px" threshold={0.5}>
                            <Typography variant={'h6'} style={{fontSize: 36}}>
                                {category.name}
                            </Typography>

                            <CardsList>
                                {category.foodProperties.map((food) => {
                                    return (
                                        <Grid key={food.id} item xs={4}>
                                            <FoodCard
                                                food={food}
                                                key={food.id}
                                            />
                                        </Grid>
                                    )
                                })}
                            </CardsList>
                        </InView>
                    )
                })
            }
        </div>
    )
}
