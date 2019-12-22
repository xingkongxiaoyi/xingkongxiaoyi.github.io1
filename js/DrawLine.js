function DrawLine(Canvas,A,B)

{

//画一条线段,“A、B”是这条线段的端点

with (Canvas)

 {

 moveTo(A[0],A[1]);

 lineTo(B[0],B[1]);

 }

}