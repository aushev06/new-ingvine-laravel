import styles from './Categories.module.scss';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import useMediaQuery from '@mui/material/useMediaQuery'

import clsx from "clsx";
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import {useEffect, useRef, useState} from "react";
import {Link} from 'react-scroll';
import {Icon} from "../Icon";
import {useSelector} from "react-redux";
import {selectActiveCategory} from "@/src/features/city/settingsSlice";


export const Categories = ({categories}) => {
    const navRef = useRef(null);

    const activeSection = useSelector(selectActiveCategory);
    const sectionRefs = useRef({});


    useEffect(() => {
        if (navRef.current && sectionRefs.current[activeSection]) {
            const navWidth = navRef.current.clientWidth;
            const activeSectionLeft = sectionRefs.current[activeSection].offsetLeft;
            const activeSectionWidth = sectionRefs.current[activeSection].clientWidth;

            const scrollLeft = activeSectionLeft - (navWidth - activeSectionWidth) / 2;
            navRef.current.scrollLeft = scrollLeft;
        }
    }, [activeSection]);

    const isMobile = useMediaQuery('(max-width:768px)');
    const categoryBlockRef = useRef(null);
    const firstCategories = categories?.slice(0, isMobile ? 7 : 10) || [];
    const length = isMobile ? 7 : 10;
    const lastCategories = categories?.slice(length) || [];
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id)
    const [fixedClass] = useState('');

    return (
        <div ref={categoryBlockRef}
             className={clsx(styles.root, fixedClass)} ref={navRef}>
            <List className={styles.list}>
                {
                    firstCategories?.map((item) => {
                        return (
                            <ListItem id={'category-' + item.id} key={item.id}
                                      className={clsx(styles.item, item.id == activeSection ? styles.active : '')}
                                      ref={(el) => (sectionRefs.current[item.id] = el)}
                            >
                                {item.name}
                            </ListItem>
                        )
                    })
                }

                {categories.length > length && (
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <ListItem id={'category-more'} {...bindTrigger(popupState)}
                                          className={clsx(styles.item, styles.more)}>Еще <span><Icon type={'down'} /></span></ListItem>
                                <Menu {...bindMenu(popupState)}>
                                    {lastCategories.map((item) => {
                                        return (
                                            <MenuItem key={item.id} onClick={popupState.close}>
                                                <Link onSetActive={() => setActiveCategory(item.id)}
                                                      activeClass={styles.active} to={item.slug} spy={true}
                                                      smooth={true} offset={50}
                                                      duration={500}>
                                                    {item.name}
                                                </Link>
                                            </MenuItem>

                                        )
                                    })}

                                </Menu>
                            </>
                        )}
                    </PopupState>
                )}

            </List>
        </div>
    )
}
