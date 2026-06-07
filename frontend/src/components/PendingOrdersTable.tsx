import { Chip, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import type { PendingOrder } from "../types";

interface PendingOrdersTableProps {
  orders: PendingOrder[];
}

export function PendingOrdersTable({ orders }: PendingOrdersTableProps) {
  return (
    <Table size="small" aria-label="待处理订单">
      <TableHead>
        <TableRow>
          <TableCell>订单号</TableCell>
          <TableCell>商品名称</TableCell>
          <TableCell>收货人</TableCell>
          <TableCell>联系电话</TableCell>
          <TableCell>收货地址</TableCell>
          <TableCell>积分</TableCell>
          <TableCell>下单时间</TableCell>
          <TableCell>状态</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.orderNo}>
            <TableCell>{order.orderNo}</TableCell>
            <TableCell>{order.productName}</TableCell>
            <TableCell>{order.receiver}</TableCell>
            <TableCell>{order.phone}</TableCell>
            <TableCell>{order.address}</TableCell>
            <TableCell>{order.points.toLocaleString()}</TableCell>
            <TableCell>{order.createTime}</TableCell>
            <TableCell>
              <Chip
                size="small"
                label={order.status}
                color={order.status === "待审核" ? "secondary" : "primary"}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
