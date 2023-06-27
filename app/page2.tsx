import Link from "next/link";

export default function Home() {
    let title = '신선한과일판매사이트'
    let name = 'csoftwareengineer';
    let link = 'https://naver.com';
    return (
        <main>
            <h1 className="title">Programming Log</h1>
            <p className="title-sub">{name}</p>
        </main>
    )
}
