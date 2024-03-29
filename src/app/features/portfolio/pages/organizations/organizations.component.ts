import { Component, OnInit } from '@angular/core';

import { Organization } from 'src/app/core/api/github/models/final/Organization';
import { GithubService } from 'src/app/core/api/github/services/github.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss'],
})
export class OrganizationsComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _organizations: Organization[] = [];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private service: GithubService) {}

  async ngOnInit(): Promise<void> {
    const tabNames = await this.service.organizations.allNames();

    tabNames.forEach(async (name) => {
      const organization = await this.service.organizations.get(name);

      this._organizations.push(organization);
      this._organizations = this._organizations.sort((o1, o2) =>
        o1.username.toUpperCase().localeCompare(o2.username.toUpperCase())
      );
    });
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get organizations(): Organization[] {
    return this._organizations;
  }
}
