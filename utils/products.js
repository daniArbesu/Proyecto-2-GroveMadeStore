const products = [
  {
    name: 'Walnut Desk Shelf (Small)',
    price: 160,
    seller: 'Grovemade-Desk',
    new: true,
    image:
      'https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-B1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=700&s=6fabeb008f4833d51d692d7a5dba670a',
    imageHover:
      'https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=200&s=8e8f6ba383039d223c82c95e1d046b84 200w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=300&s=ee3fd747f978327040d9039d754a58d4 300w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=500&s=027ff86572dbca3a01a9e1f248b381ae 500w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=700&s=7f5ee7140c4e3ddb55ab14f2d885dc5c 700w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=900&s=bc7bce218b298022b4233be0bcb3dfca 900w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=1100&s=6de2f91d573cccd48e5e4c9e29a79dc1 1100w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=1300&s=f9d6d1203762436423a6c54c83f2539a 1300w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=1500&s=ca108e711ddef3e576604fff50c70107 1500w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=1800&s=5822b5ff6a80b1fb7de9363d0e8e777b 1800w,https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-small-gridX-A1.jpg%3F_v%3D1657735021.23?auto=format&ixlib=python-1.1.2&w=2250&s=0967da733c61b17007c2cfe61dc234e0 2250w'
  },
  {
    name: 'Walnut Desk Shelf (Medium)',
    price: 200,
    seller: 'Grovemade-Desk',
    new: true,
    image:
      'https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-medium-gridX-B1_o7SlR0h.jpg%3F_v%3D1657735111.79?auto=format&ixlib=python-1.1.2&w=500&s=f0d2404a1f6682d5ab6fa173d2f90422',
    imageHover:
      'https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-ply-medium-gridX-A1_S3750G6.jpg%3F_v%3D1657735111.79?auto=format&ixlib=python-1.1.2&w=500&s=f4f81620d5557aaf7ac2078fa206b371'
  },
  {
    name: 'Walnut Desk Shelf (Large)',
    price: 260,
    seller: 'Grovemade-Desk',
    new: false,
    image:
      'https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-gridX-A1_tbx2Gnu.jpg%3F_v%3D1635183066.0?auto=format&ixlib=python-1.1.2&w=500&s=e155147988246bbb28781a164bfd6b9d',
    imageHover:
      'https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-gridX-B1_0kn2etL.jpg%3F_v%3D1635183066.0?auto=format&ixlib=python-1.1.2&w=500&s=c0a7ca2393d9db06b3f6aad8e817d650'
  }
];

export default products;
