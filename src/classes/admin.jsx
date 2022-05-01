import React from 'react';
import Adminhead from '../Admin/dashboard-header';
import Sidebar from '../Admin/sidebar';
import Headbar from '../Admin/head';
import StockChart from '../Admin/Graphs/StockChart';
import user from './images.png'

function admin(props) {

  const data = {
    chartData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      data: [
        23,
        122,
        145,
        127,
        128,
        129,
        23,
        129,
        325,
        232,
        344,
        300
      ],
    },
  };
  return (
    <div>
      <Headbar />
      <Sidebar />
      <div className="ml-72">
        <Adminhead />

        <div className="flex items-center px-5 py-5">
          <StockChart info={data} />
          <div class="flex justify-center">
            <div class="bg-gray-200 block m-6 p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <p class="text-gray-900 text-xl leading-tight font-medium mb-2">New Join Members</p>
              <div class="grid grid-cols-1 gap-2">
                {props.data
                  ? props.data.map((d) => (
                       <div class="flex items-center">
          
                        <img class="w-9 h-9 rounded-full mr-4" src={user} alt="Client" />
                          <p class="text-gray-900 pb-2 text-s py-2">{d.name}</p>
                      </div>
                  ))
                  : 'loading'}
              </div>
            </div>
          </div>

                  </div>
      </div>

    </div>
  );
}

export default admin;