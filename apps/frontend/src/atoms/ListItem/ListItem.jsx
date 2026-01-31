import classNames from 'classnames'

export const ListItem = ({ style, serverResponses, index }) => {

    if (index >= serverResponses.length) {
        return <div style={style} className="flex text-center">Loading...</div>;
    }

    const { requestIndex, responseTime, responseStatus } = serverResponses[index];
    
    return (
        <div
            className="flex text-center justify-center items-center p-2 border-b border-gray-300 w-full h-full"
            style={style}
        >
            <span className={classNames({
                'text-green-600': responseStatus === 200,
                'text-red-600': responseStatus === 429,
                'text-gray-800': !responseStatus,
            })}>
                {`Request #${requestIndex}${responseTime ? ` - ${responseTime}ms` : ''}`}
            </span>
        </div>
    )
}