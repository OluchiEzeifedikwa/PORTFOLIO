import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

function Content() {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme;

    return (
        <div className={theme}>

        </div>
    )
}
export default Content;