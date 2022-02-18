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
  data: function() {
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
@import "./style/transactionTable.css";
</style>
