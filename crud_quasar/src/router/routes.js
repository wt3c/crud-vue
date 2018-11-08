const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/product_list.vue') },
      { path: '/product', name: 'product', component: () => import('pages/product.vue') },
      { path: '/add-product', name: 'add-product', component: () => import('pages/add-product.vue') },
      { path: '/product-edit', name: 'product-edit', component: () => import('pages/product-edit.vue') },
      { path: '/product-delete', name: 'product-delete', component: () => import('pages/product-delete.vue') }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
