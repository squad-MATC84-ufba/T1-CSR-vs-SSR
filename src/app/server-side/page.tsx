
export default async function serverSide(){
    const url = "http://localhost:3000/api/hello-world";
    const res = await fetch (url, {
        cache: 'no-store',
    });

    if (!res.ok)
        throw new Error();

    const page_content: { msg: string } = await res.json();

    return (
        <h1><center>{page_content.msg}</center></h1>
    );
}