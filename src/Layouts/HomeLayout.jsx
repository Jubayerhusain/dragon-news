
import Header from './../Components/Header';
import Navber from './../Components/Navber';
function HomeLayout() {
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
                <Navber></Navber>
            </header>
        </div>
    )
}

export default HomeLayout
