import Archive from "./Archive";

export default function Loading() {
    return <>
        <div style={{
            width:'100%',height:'100%',display:'flex',alignItems:'center',
            perspective: "100px"
        }}>
            <div  style={{ animation: 'archive 1s infinite' }}>
                <Archive name="JS"></Archive>
            </div>
        </div>
    </>
}