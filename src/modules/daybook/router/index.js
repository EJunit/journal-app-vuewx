export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '../../daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '../../daybook/views/NoEntrySelected'),
        }, {
            path: ':id',
            name: 'entry-view',
            component: () => import(/* webpackChunkName: "entry-view" */ '../../daybook/views/EntryView'),
        }
    ]
}