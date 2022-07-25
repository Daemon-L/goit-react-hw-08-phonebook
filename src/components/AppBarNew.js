import Navigation from './pages/Navigation';
import AuyhNav from './pages/Auyhnav';
import UserMenu from './pages/UserMenu';


export default function AppBar() {
    return (
        <header>
            <Navigation />
            <AuyhNav />
            <UserMenu />
        </header>
    );
}
