import LikeButton from "./like-button";
function Header({ title }) {
    console.log(title);
    return (<h1>{title ? title : 'Default String'}</h1>);
}

export default function HomePage() {
    const names = ["Geeta", "Sita", "Manu", "Ravi"]
    return (
        <div>
            <Header title="Develop Preview Ship" />
            <ul>
                {names.map((name) => (
                    <li key={name}>
                        {name}
                    </li>
                )
                )}
            </ul>
            <LikeButton/>
        </div>
    );
}