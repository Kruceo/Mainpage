export default function Archive(props) {
    console.log(props)
    return <div style={{
        width: props.width ?? '80px',
        height: props.height ?? '80px',
        position: 'relative',
        display: "flex",
        perspective:'100px'

        
    }}>
        <div style={{
            // transform: 'rotate3d(1,.3,0,30deg,200deg,100deg)',
            // animation: 'archive 10s infinite'
        }}>
            <img src="/img/archive.svg" alt="" style={{
                height: '100%',
                width:'100%'

            }} />
            <p style={{ position: 'absolute', textAlign: 'center', top: '30%', transform: 'translateX(-50%)', left: '50%', color: props.color, padding: '2px', borderRadius: '5px', fontSize: '10px' }}>{"{...}"}</p>
            <p style={{ position: 'absolute', fontWeight: 'bold', textAlign: 'center', top: '60%', transform: 'translateX(-50%)', left: '50%', background: props.color, padding: '3px', borderRadius: '5px', color: '#0008', fontSize: '12px' }}>{props.name}</p>
        </div>
    </div>
}