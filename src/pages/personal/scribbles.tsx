import { Link } from "react-router-dom";

export default function Scribble() {
    return (
        <div className="blog superPadding fullScreen">
            <div className="colorPrimary paddingVertical  homeLink">
                <div className="space"></div>
                <div className="space"></div>
                <p>
                    <a href="/">VIGNESH MARIMUTHU </a> /<a href="/personal"> PERSONAL </a>{" "}
                    /
                </p>
                <div className="bottomLine"> </div>
            </div>
            <HeaderSection />
            <ScribbleList />
        </div>
    );
}

function HeaderSection() {
    return (
        <div>
            <div className="space"></div>
            <div className="superTitlePrimary colorSecondary">Scribbles</div>
            <div className="subHeadingSecondary colorPrimary">
                You can find my two cents, opinions, small stories, whatever I want to
                say here and I call these as scribbles
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="bottomLine"> </div>
            <div className="space"></div>
        </div>
    );
}

function ScribbleList() {
    return (
        <div>
            <div className="scribblesList subHeadingSecondary textColor">
                <a href="hello">
                    <div className="scribbleItem">
                        hello1
                    </div>
                </a>
            </div>
        </div>
    );
}

function formatDate(date: Date) {
    let d = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    // const dateTimeFormat = new Intl.DateTimeFormat("en-US", options | undefined);
    // console.log(dateTimeFormat.format(d));
    // return dateTimeFormat.format(d);
}