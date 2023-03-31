import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Menu } from "../../components/Menu/Menu";
import {ChartWrapper, Content, Title, Wrapper, Info} from "./styles";
import LineChart from "../../components/LineChart/LineChart";
import PieChart from "../../components/PieChart/PieChart";
import PolarAreaChart from "../../components/PolarAreaChart/PolarAreaChart";
import { CPU_DATA } from "../../mocks/data_cpu";
import { RAM_DATA } from "../../mocks/data_ram";
import { HDD_DATA } from "../../mocks/data_hdd";
import { QUE_DATA } from "../../mocks/data_que";
import { SQL_DATA } from "../../mocks/data_sql";

const SECTIONS = {
    CPU: {
        title: "Загрузка CPU",
        data: CPU_DATA,
        label: 'CPU',
        chartType: 'line',
    },
    RAM: {
        title: "RAM",
        data: RAM_DATA,
        label: 'RAM'
    },
    SQL: {
        title: "Ресурсы postgreSQL",
        data: SQL_DATA,
        label: 'SQL',
        chartType: 'pol'
    },
    QUE: {
        title: "Очередь заданий",
        data: QUE_DATA,
        label: 'QUE'
    },
    HDD: {
        title: "Место на диске",
        data: HDD_DATA,
        label: 'HDD',
        chartType: 'pie'
    },
}

export const Dashboard = () => {
    const location = useLocation();

    const [title, setTitle] = React.useState('');
    const [data, setData] = React.useState([]);
    const [label, setLabel] = React.useState('');
    const [chartType, setChartType] = React.useState('');
    const chartWrapperRef = React.useRef(null);

    useEffect(() => {
        const id = location.search.replace('?id=', '');
        if (id) {
            setTitle(SECTIONS[id].title);
            setData(SECTIONS[id].data);
            setLabel(SECTIONS[id].label);
            setChartType(SECTIONS[id].chartType);
        }
    }, [location]);

    console.log(title, data)

    const renderCharts = () => {
        switch(chartType) {
            case "pie":
                return <PieChart
                    chartData={{
                        labels: [60, 50, 40],
                        datasets: [
                            {
                                data: data.map((data) => data.used),
                                label: label,
                                borderWidth: 2,
                            },
                        ],
                    }} />
            case "pol":
                return <PolarAreaChart
                    chartData={{
                        labels: [60, 50, 40, 30, 20, 10, 0],
                        datasets: [
                            {
                                data: data.map((data) => data.used),
                                label: label,
                                borderWidth: 1,
                            },
                        ],
                    }} />
            default:
                return <LineChart
                    chartData={{
                        labels: [60, 50, 40, 30, 20, 10, 0],
                        datasets: [
                            {
                                data: data.map((data) => data.used),
                                label: label,
                                borderWidth: 1,
                            },
                        ],
                    }} />

        }
    }

    return (
       <Wrapper>
           <Menu active={label} />
           <Content>
               <Title>{title}</Title>
               <ChartWrapper ref={chartWrapperRef}>
                   {renderCharts()}
               </ChartWrapper>
               <Info>
                   <div>
                       <p>Использование:</p>
                       <p>1%</p>
                   </div>
                   <div>
                       <p>Скорость:</p>
                       <p>1.56 Гц</p>
                   </div>
                   <div>
                       <p>Процессы:</p>
                       <p>187</p>
                   </div>
               </Info>
           </Content>
       </Wrapper>
    );
}
