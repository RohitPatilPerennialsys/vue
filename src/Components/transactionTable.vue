<template>
  <div>
    <div class="transaction-table-container">
      <table>
        <tr v-for="i in data" :key="i">
          <td class="trans-ID">{{ i.Transactionid }}</td>
          <td class="date">{{ i.date }}</td>
          <td class="amount">{{ i.amount }}</td>
          <td class="status">{{ i.status }}</td>
          <td class="action">{{ i.action }}</td>
        </tr>
        <tr v-for="i in datavalue" :key="i" :value="Rejected">
          <td class="trans-ID-row">{{ i.Transactionid }}</td>
          <td class="date-row">{{ i.date }}</td>
          <td class="amount-row">{{ i.amount }}</td>
          <td
            v-bind:class="[i.status === 'Approved' ? 'approved' : 'rejected']"
          >
            {{ i.status }}
          </td>
          <td class="action-row">
            <img
              class="action-row-view-img"
              src="/src/assets/images/eye-dash-2.svg"
            />
            <img
              class="action-row-download-img"
              src="/src/assets/images/download-dash-2.svg"
            />
          </td>
        </tr>
      </table>
    </div>
    <popup> </popup>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: [
        {
          id: 1,
          Transactionid: "Transaction ID",
          date: "Date",
          amount: "Amount",
          status: "Status",
          action: "Action"
        }
      ],
      datavalue: [
        {
          id: 1,
          Transactionid: 2011002039111,
          date: "22-09-2021",
          amount: "1,780",
          status: "Rejected"
        },
        {
          id: 2,
          Transactionid: 2011002039112,
          date: "19-09-2021",
          amount: "1,890",
          status: "Approved"
        },
        {
          id: 3,
          Transactionid: 2011002039113,
          date: "20-08-2021",
          amount: "5,500",
          status: "Rejected"
        },
        {
          id: 4,
          Transactionid: 2011002039114,
          date: "12-07-2021",
          amount: "2,590",
          status: "Approved"
        },
        {
          id: 5,
          Transactionid: 2011002039115,
          date: "08-07-2021",
          amount: "2,800",
          status: "Rejected"
        }
      ]
    };
  }
};
</script>

<style scoped>
.transaction-table-container {
  height: 350px;
  margin-bottom: 169px;
  margin-left: 24px;
  margin-right: 24px;
  background: #ffffff;
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding-top: 10px;
}
table {
  border-collapse: collapse;
  margin-left: 24px;
  margin-right: 24px;
}
tr:nth-child(1) {
  padding-top: 20px;
  background-color: #ffffff;
  border: 0px;
}
tr:nth-child(2) {
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px 4px 0px 0px;
}
tr:nth-child(6) {
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 0px 0px 4px 4px;
}
tr {
  border-bottom: 1px solid #ddd;
  height: 47px;
  background: rgba(244, 245, 253, 0.5);
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}
th {
  font-weight: bold;
  font-size: 14px;
  line-height: 157%;
  color: #828282;
}

.detailsContainer {
  margin: 6px 24px 197px 24px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}
.detailsFlex {
  display: flex;
}
.trans-ID {
  margin: 24px 0px 0px 28px;
}
.date {
  margin-top: 24px;
  padding-left: 186px;
}

.trans-ID,
.date,
.amount,
.status,
.action {
  font-weight: bold;
  font-size: 14px;
  line-height: 157%;
  color: #828282;
  margin: 0px 0px;
}
.trans-ID,
.trans-ID-row {
  padding-left: 12px;
}
.date,
.date-row {
  padding-left: 165px;
}
.amount,
.amount-row {
  padding-left: 220px;
}
.status,
.approved,
.rejected {
  padding-left: 220px;
}
.action {
  padding-left: 175px;
  padding-right: 250px;
}
.rejected {
  margin-left: 190px;
  color: #ff0000;
}
.approved {
  margin-left: 190px;
  color: #008000;
}
.action-row-view-img {
  width: 22px;
  height: 15px;
  margin: 15.5px 0px 15.5px 175px;
  cursor: pointer;
}
.action-row-download-img {
  width: 14px;
  height: 17px;
  margin: 14px 0px 15px 22px;
  cursor: pointer;
}
.trans-ID,
.date,
.amount,
.status,
.action {
  font-weight: bold;
  font-size: 14px;
}
</style>
