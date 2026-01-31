import { List } from 'react-window';
import { ListItem } from '@atoms/ListItem/ListItem';
import useServerResponsesStore from './store/useServerResponsesStore';


export const ServerLogsList = () => {

    const serverResponses = useServerResponsesStore((state) => state.serverResponses);

    return (<div>
        <h2 className="text-xl font-bold text-center">Server logs</h2>
        <div className="flex row justify-center items-center">
            <div className="w-100 h-100">
                <List
                    rowCount={1000}
                    rowHeight={40}
                    height={400}
                    width={400}
                    rowComponent={ListItem}
                    rowProps={{ serverResponses }}
                />
            </div>
        </div>

    </div>)
}