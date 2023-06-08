// import {
//   CallHandler,
//   ExecutionContext,
//   Injectable,
//   NestInterceptor,
// } from '@nestjs/common';
// import { Observable, map } from 'rxjs';


// @Injectable()
// export class TransformInterceptor implements NestInterceptor{
//   intercept(context: ExecutionContext, next: CallHandler){
//     console.log('Before.......');
//     return next.handle().pipe(
//       map((data) => {
//         console.log('After...');
//         // console.log(data);
//         const res = {
//           id: data.id,
//           name: data.name,
//           email: data.email,
//         }
//         return res;
//     }))
//   }
// }
